import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

interface PropsOptions {
  text: string;
  value?: string;
}

interface FilterGroupProps {
  title: string;
  inputType: "checkbox" | "radio";
  options: PropsOptions[];
}

function FilterGroup({ title, inputType, options }: FilterGroupProps) {
  const [valorSelecionado, setValorSelecionado] = useState("");
  const handleChange = (event) => {
    setValorSelecionado(event.target.value);
  };
  return (
    <div className="w-full">
      <h2 className="font-bold text-[#474747] tracking-wide">{title}</h2>
      {options.map((option) => (
        <div key={option.text}>
          {inputType === "checkbox" ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "##666666",
                      "&.Mui-checked": { color: "#C92071" },
                    }}
                  />
                }
                label={option.text}
              />
            </FormGroup>
          ) : (
            <FormControl>
              <RadioGroup>
                <FormControlLabel
                  value={option.value}
                  control={
                    <Radio
                      sx={{
                        color: "##666666",
                        "&.Mui-checked": { color: "#C92071" },
                      }}
                    />
                  }
                  label={option.text}
                  checked={valorSelecionado === option.value}
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterGroup;
