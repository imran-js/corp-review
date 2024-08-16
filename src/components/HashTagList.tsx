type Props = {};
const generateRandomId = () => Math.random().toString(36).substr(2, 9);

const hashtags = [
  { id: generateRandomId(), text: "Tech" },
  { id: generateRandomId(), text: "Apple" },
  { id: generateRandomId(), text: "McDonald's" },
  { id: generateRandomId(), text: "Google" },
  { id: generateRandomId(), text: "Coca -Cola" },
  { id: generateRandomId(), text: "Starbucks" },
  { id: generateRandomId(), text: "Tesla" },
  { id: generateRandomId(), text: "Louis Vuitton" },
  { id: generateRandomId(), text: "Nestle" },
  { id: generateRandomId(), text: "Gucci" },
  { id: generateRandomId(), text: "Microsoft" },
  { id: generateRandomId(), text: "BMW" },
  { id: generateRandomId(), text: "H&M" },
  { id: generateRandomId(), text: "Food" },
  { id: generateRandomId(), text: "KFC" },
  // { id: generateRandomId(), text: "Other Industries" },
  // { id: generateRandomId(), text: "Zara" },
  // { id: generateRandomId(), text: "Mercedes-Benz" },
  // { id: generateRandomId(), text: "Amazon" },
  // { id: generateRandomId(), text: "Adidas" },
  // { id: generateRandomId(), text: "Facebook (Meta)" },
  // { id: generateRandomId(), text: "Automotive" },
  // { id: generateRandomId(), text: "Toyota" },
  // { id: generateRandomId(), text: "Volkswagen" },
  // { id: generateRandomId(), text: "Pepsi" },
  // { id: generateRandomId(), text: "Ford" },
  // { id: generateRandomId(), text: "Nike" },
  // { id: generateRandomId(), text: "Honda" },
  // { id: generateRandomId(), text: "Disney" },
  // { id: generateRandomId(), text: "Lego" },
  // { id: generateRandomId(), text: "Sony" },
  // { id: generateRandomId(), text: "Samsung" },
  // { id: generateRandomId(), text: "Netflix" },
  // { id: generateRandomId(), text: "Amazon" },
];

function HashTagList({}: Props) {
  return (
    <ul className="hashtags">
      {hashtags.map((tag) => (
        <li key={tag.id}>
          <button>#{tag.text}</button>
        </li>
      ))}
    </ul>
  );
}

export default HashTagList;
