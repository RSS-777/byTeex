export const renderStars = (rating: number, maxStars = 5) => {
  return Array.from({ length: maxStars }).map((_, i) => (
    <span key={i} className="text-yellow-500">
      {i < rating ? "★" : "☆"}
    </span>
  ));
};