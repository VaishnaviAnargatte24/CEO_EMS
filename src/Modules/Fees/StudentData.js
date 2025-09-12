export const data = [
  { id: 1, name: "Priya Patel", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 2, name: "Ananya Desai", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 3, name: "Kavya Nair", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 4, name: "Arjun Malhotra", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 5, name: "Aisha Sharma", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 6, name: "Amit Kumar", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 7, name: "Siddharth Bhatia", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 8, name: "Isha Gupta", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 9, name: "Arjun Sharma", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 10, name: "Meera Kapoor", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 11, name: "Rohan Mehta", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 12, name: "Nina Joshi", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 13, name: "Kabir Singh", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 14, name: "Tara Iyer", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 15, name: "Vikram Rao", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 16, name: "Sana Khan", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 17, name: "Dev Malhotra", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 18, name: "Anika Verma", class: "11th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  { id: 19, name: "Raghav Chopra", class: "12th", total: "₹ 80,000", credit: "₹ 77,000", pending: "₹ 3000" },
  
];

// ✅ Unique class list
export const classes = [...new Set(data.map((student) => student.class))];

// ✅ Fixed year list
export const years = ["2022", "2023", "2024"];
