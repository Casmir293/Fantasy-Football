import { ref } from "vue";

export default function useFetchData() {
  const BASE_URL = "http://127.0.0.1:8080";
  const operators = ref<Operator[]>([]);

  const fetchOperators = async () => {
    const response = await fetch(`${BASE_URL}/data.json`);
    const data = await response.json();
    operators.value = data;
  };

  return {
    operators,
    fetchOperators,
  };
}
