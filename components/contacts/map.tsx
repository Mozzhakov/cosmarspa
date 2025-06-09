interface MapProps {
  dictionary: {
    info: {
      address: string;
    };
  };
}

export default function Map({ dictionary }: MapProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm">
      <iframe
        title="Cosmarspa Med Beauty location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.320622675439!2d-95.45042718922662!3d30.142248074769718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647373415ef32f3%3A0xfb90b4aa2aa151c6!2sCosMarSpa%20Med%20Beauty!5e0!3m2!1sru!2sus!4v1748045741224!5m2!1sru!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
