import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-700 mb-4">
          About Dar Hub
        </h1>
        <p className="text-slate-600 text-lg leading-7 mb-4">
          <strong>Dar Hub</strong> is your go-to platform for renting and
          selling houses with ease. Whether you're a homeowner looking to list
          your property or someone searching for the perfect place to call home,
          Dar Hub makes the process simple and efficient.
        </p>
        <p className="text-slate-600 text-lg leading-7 mb-4">
          The platform offers a user-friendly experience with powerful search
          filters, secure authentication, and detailed property listings —
          including photos, pricing, and amenities. Dar Hub connects landlords
          and buyers with potential tenants and homeowners in just a few clicks.
        </p>
        <p className="text-slate-600 text-lg leading-7">
          Developed using modern tools, Dar Hub is a fast and scalable solution
          for real estate needs. Our mission is to make finding and listing
          houses for rent or sale as smooth and hassle-free as possible.
        </p>
      </main>
      <Footer />
    </div>
  );
}
