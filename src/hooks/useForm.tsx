import { ChangeEvent, useState } from "react";

const useForm = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    console.log({ name, value })
    setForm({
      ...form,
      [name]: value,
    });
  };

  return { form, handleChange };
};

export default useForm;
