export default function Filters({
  status,
  gender,
  species,
  onStatusChange,
  onGenderChange,
  onSpeciesChange,
}) {
  return (
    <div className="flex gap-4 mb-4">
      {/* STATUS */}
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* GENDER */}
      <select
        value={gender}
        onChange={(e) => onGenderChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* SPECIES */}
      <input
        type="text"
        placeholder="Species"
        value={species}
        onChange={(e) => onSpeciesChange(e.target.value)}
        className="p-2 border rounded"
      />
    </div>
  );
}
