export const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
};
