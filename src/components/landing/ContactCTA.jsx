const whatsappNumber = "5491176550890";

export default function ContactCTA() {
  const message = encodeURIComponent("Hola Barbara, quería hacer una consulta sobre tus servicios.");
  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="rounded-[2rem] bg-black p-8 text-white md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">¿Tenés una consulta?</p>
        <h2 className="mt-3 text-3xl font-semibold">Hablemos de tu próxima mirada.</h2>
        <a href={href} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-[#FF65C1] px-6 py-3 font-semibold text-black">
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
