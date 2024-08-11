import React, { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const GITHUB_TOKEN = '';
const GITHUB_USER = 'dredevs';

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
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        const reposWithLanguages = await Promise.all(data.map(async (repo: any) => {
          const langResponse = await fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          });
          const languages = await langResponse.json();
          const primaryLanguage = Object.keys(languages).length === 0
            ? 'Markdown'
            : Object.keys(languages)[0] || 'Unknown';
          return { ...repo, language: primaryLanguage };
        }));

        setRepositories(reposWithLanguages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>Recent Projects</h2>
      <ul style={listStyles}>
        {repositories.map((repo) => (
          <li key={repo.id} style={repoStyles}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={linkStyles}>
              <h3 style={repoNameStyles}>{repo.name}</h3>
            </a>
            <div style={descriptionContainerStyles}>
              <p style={descriptionStyles}>{repo.description || 'No description available.'}</p>
            </div>
            <div style={languageContainerStyles}>
              <div
                style={{
                  ...languageCircleStyles,
                  backgroundColor: languageColors[repo.language] || languageColors['Unknown'],
                }}
              />
              <span style={languageNameStyles}>{repo.language}</span>
            </div>
            <div style={statsContainerStyles}>
              <span style={statItemStyles}>
                ⭐ {repo.stargazers_count}
              </span>
              <span style={statItemStyles}>
                🍴 {repo.forks_count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100vh',
  padding: '1rem',
  backgroundColor: 'transparent',
  marginLeft: '5%',
  marginTop: '5%',
  maxWidth: '40%',
};

const headingStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: 'white',
  marginBottom: '1rem',
  textAlign: 'center',
};

const listStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  width: '100%',
};

const repoStyles: React.CSSProperties = {
  backgroundColor: '#2a2a2a',
  padding: '1rem',
  borderRadius: '5px',
  marginBottom: '1rem',
  position: 'relative',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  minHeight: '90px',
};

const linkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: 'white',
};

const repoNameStyles: React.CSSProperties = {
  margin: '0 0 0.5rem',
  fontSize: '1.5rem',
  color: 'white',
};

const descriptionContainerStyles: React.CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  textAlign: 'right',
  color: '#ccc',
  width: 'calc(100% - 2rem)',
};

const descriptionStyles: React.CSSProperties = {
  margin: '0',
};

const statsContainerStyles: React.CSSProperties = {
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  color: '#ccc',
  display: 'flex',
  gap: '0.5rem',
};

const statItemStyles: React.CSSProperties = {
  display: 'block',
};

const languageContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  backgroundColor: 'transparent',
};

const languageCircleStyles: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  marginRight: '0.5rem',
};

const languageNameStyles: React.CSSProperties = {
  color: '#ccc',
};
