interface Information {
  text: string;
  link: string;
}

interface InformationsProps {
  title: string;
  informations: Information[];
}

function Informations({ informations, title }: InformationsProps) {
  return (
    <div className="mt-14 max-w-96 break-words">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {informations.map((info, index) => (
          <p key={index}>
            <a href={info.link}>{info.text}</a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Informations;
