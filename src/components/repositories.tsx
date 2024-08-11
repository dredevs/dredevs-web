import React, { useEffect, useState } from 'react';
import styles from './Modules/repositories.module.css';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const GITHUB_USER = 'dredevs'; // Replace with your GitHub username

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Python: '#3572A5',
  Java: '#b07219',
  Markdown: '#777',
  Unknown: '#777'
};

const Repositories: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      const cacheKey = 'github_repositories';
      const cacheExpiryKey = 'github_repositories_expiry';
      const cacheDuration = 60 * 60 * 1000; // 1 hour

      // Check cache
      const cachedData = localStorage.getItem(cacheKey);
      const cacheExpiry = localStorage.getItem(cacheExpiryKey);
      const now = new Date().getTime();

      if (cachedData && cacheExpiry && (now - parseInt(cacheExpiry, 10) < cacheDuration)) {
        setRepositories(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching repositories...');

        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`);

        if (response.status === 403) {
          throw new Error('Rate limit exceeded. Please wait a while before trying again.');
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Repositories data:', data);

        const reposWithLanguages = await Promise.all(data.map(async (repo: any) => {
          try {
            const langResponse = await fetch(repo.languages_url);

            if (langResponse.status === 403) {
              throw new Error('Rate limit exceeded while fetching languages.');
            }

            if (!langResponse.ok) {
              throw new Error(`Failed to fetch languages for ${repo.name}: ${langResponse.statusText}`);
            }

            const languages = await langResponse.json();
            console.log(`Languages data for ${repo.name}:`, languages);

            const primaryLanguage = Object.keys(languages).length === 0
              ? 'Markdown'
              : Object.keys(languages)[0] || 'Unknown';

            return { ...repo, language: primaryLanguage };
          } catch (langError) {
            console.error(`Error fetching languages for ${repo.name}:`, langError);
            return { ...repo, language: 'Unknown' };
          }
        }));

        // Update cache
        localStorage.setItem(cacheKey, JSON.stringify(reposWithLanguages));
        localStorage.setItem(cacheExpiryKey, now.toString());

        setRepositories(reposWithLanguages);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error: ${err.message}`);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Recent Projects</h2>
      </div>
      <ul className={styles.list}>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

const RepositoryItem: React.FC<{ repo: Repository }> = ({ repo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`${styles.repoItem} ${isHovered ? styles.repoItemHovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', color: 'white' }}>{repo.name}</h3>
      </a>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', textAlign: 'right', color: '#ccc', width: 'calc(100% - 2rem)' }}>
        <p style={{ margin: '0' }}>{repo.description || 'No description available.'}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: '1rem', left: '1rem', backgroundColor: 'transparent' }}>
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            marginRight: '0.5rem',
            backgroundColor: languageColors[repo.language] || languageColors['Unknown']
          }}
        />
        <span style={{ color: '#ccc' }}>{repo.language}</span>
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', color: '#ccc', display: 'flex', gap: '0.5rem' }}>
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </li>
  );
};

export default Repositories;
