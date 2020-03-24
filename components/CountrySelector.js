import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('India');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(countries);
  return (
    <div className="mb-8">
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
        style={{ marginBottom: 20, padding: 20, height: 40, fontSize: 20 }}
      >
        {Object.entries(countries.countries).map(([country, code]) => {
          console.log(code);
          return (
            <option
              selected={selectedCountry === code.name}
              key={code.name}
              value={code.name}
            >
              {code.name}
            </option>
          );
        })}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
