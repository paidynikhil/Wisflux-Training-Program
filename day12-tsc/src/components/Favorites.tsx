import React from "react";

interface FavoritesProps {
  favorites: string[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Photos</h2>
      {favorites.map((favoriteUrl) => (
        <img
          key={favoriteUrl}
          src={favoriteUrl}
          alt="Favorite"
          className="favorite"
        />
      ))}
    </div>
  );
};

export default Favorites;
