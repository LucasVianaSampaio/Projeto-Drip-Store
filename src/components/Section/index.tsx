import { Link } from "react-router-dom";

interface LinkProps {
  text: string;
  href: string;
}

interface SectionProps {
  title: string;
  titleAlign: "left" | "center";
  link?: LinkProps;
  children: React.ReactNode;
}

function Section({ link, title, titleAlign, children }: SectionProps) {
  return (
    <div>
      <div className="w-full inline-flex justify-between">
        {titleAlign == "center" ? (
          <h2 className="text-[#474747] font-bold text-center">{title}</h2>
        ) : (
          <h2 className="text-[#474747] font-bold text-left">{title}</h2>
        )}
        {link && (
          <div className="inline-flex gap-2">
            <Link className="right-0 text-[#C92071]" to={link.href}>
              {link.text}
            </Link>
            <img src="/setaParaADireita.svg" alt="" />
          </div>
        )}
      </div>

      {children}
    </div>
  );
}

export default Section;
