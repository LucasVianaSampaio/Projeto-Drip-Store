import { useState } from "react";

interface ProductOptionsProps {
  options: string[];
  shape: "square" | "circle";
  type: "text" | "color";
  radius?: number;
}

export function ProductOptions({
  options,
  shape,
  radius,
  type,
}: ProductOptionsProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      {shape === "square" ? (
        <div>
          {type === "text" ? (
            <div className="space-y-3">
              <p className="font-bold text-sm text-[#8F8F8F]">Tamanho</p>
              <div className="inline-flex gap-3">
                {options.map((option, index) => (
                  <button
                    style={{
                      borderRadius: radius,
                      borderColor:
                        selectedIndex === index ? "#C92071" : "#FFFFFF",
                      borderWidth: "2px",
                    }}
                    key={option}
                    className="border border-[#CCCCCC] p-3"
                    onClick={() => handleButtonClick(index)}
                  >
                    <p className="font-bold tracking-wide text-[#474747]">
                      {option}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="font-bold text-sm text-[#8F8F8F]">Tamanho</p>
              <div className="inline-flex gap-3">
                {options.map((option, index) => (
                  <button
                    style={{
                      borderRadius: radius,
                      borderColor:
                        selectedIndex === index ? "#C92071" : "#FFFFFF",
                      borderWidth: "2px",
                    }}
                    key={option}
                    className=" p-6"
                    onClick={() => handleButtonClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {type === "text" ? (
            <div className="space-y-3">
              <p className="font-bold text-sm text-[#8F8F8F]">Tamanho</p>
              <div className="inline-flex gap-2">
                {options.map((option, index) => (
                  <button
                    style={{
                      borderColor:
                        selectedIndex === index ? "#C92071" : "#FFFFFF",
                      borderWidth: "2px",
                    }}
                    key={option}
                    className="border border-[#CCCCCC] p-4 rounded-full"
                    onClick={() => handleButtonClick(index)}
                  >
                    <p className="font-bold tracking-wide text-[#474747]">
                      {option}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="font-bold text-sm text-[#8F8F8F]">Tamanho</p>
              <div className="inline-flex gap-3">
                {options.map((option, index) => (
                  <button
                    style={{
                      backgroundColor: option,
                      borderColor:
                        selectedIndex === index ? "#C92071" : "#FFFFFF",
                      borderWidth: "2px",
                    }}
                    key={option}
                    className=" p-6 rounded-full"
                    onClick={() => handleButtonClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductOptions;
