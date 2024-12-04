import { Select } from "antd";
const options = [
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
  { value: "customer", label: "Customer" },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const MultiSelect = () => (
  <Select
    mode="tags"
    style={{
      width: "100%",
    }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);
export default MultiSelect;
