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

  return (
    <div>
      {shape === "square" ? (
        <div>
          {type === "text" ? (
            <div className="space-y-3">
              <p className="font-bold text-sm text-[#8F8F8F]">Tamanho</p>
              <div className="inline-flex gap-3">
                {options.map((option) => (
                  <button
                    style={{ borderRadius: radius }}
                    key={option}
                    className="border border-[#CCCCCC] p-3"
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
                {options.map((option) => (
                  <button
                    style={{ borderRadius: radius, backgroundColor: option }}
                    key={option}
                    className=" p-6"
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
                {options.map((option) => (
                  <button
                    key={option}
                    className="border border-[#CCCCCC] p-4 rounded-full"
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
                {options.map((option) => (
                  <button
                    style={{ backgroundColor: option }}
                    key={option}
                    className=" p-6 rounded-full"
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
