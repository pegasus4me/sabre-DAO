import test from "../../assets/test.png"
type TSvault = {
  logo: string;
  category: string;
  name: string;
  statut: string;
  description: string;
  price: string;
  round: string;
  maxCap: string;
  viewMore: () => void;
};

export default function Svault({
  logo,
  category,
  name,
  statut,
  description,
  price,
  round,
  maxCap,
  viewMore,
} : TSvault): JSX.Element {
  return <article className="flex flex-col w-[500px] h-[460px] rounded-lg bg-gradient-to-b from-[#393783] to-[#0C0C1D]
  
  ">
    <section className="flex justify-between p-6">
    <div className="">
        <div className="p-2">
          <h3 className="text-5xl font-clash-reg">{name}</h3>
          <p className="text-lg font-clash-light">{category}</p>
        </div>
        <p className="text-xl font-clash-reg mt-10">{description}</p>


        <div className="mt-10">
          <p className="text-md font-clash-light">{round}</p>
          <p className="text-md font-clash-light">{price}</p>
          <p className="text-md font-clash-light mt-5">Svault max cap : {maxCap}</p>
        </div>
    </div>
    <div className="">
      <img src={logo} alt="logo" width={300}/>
    </div>
    </section>
    <div className="w-[100%]">
      <button className="w-[100%] mt-5 bg-[#22214E] text-white p-3  rounded-b-lg font-clash-reg text-xl"
      onClick={viewMore}
      >View Now</button>
    </div>
  </article>;
}
