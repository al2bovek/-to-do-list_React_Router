import { useParams } from "react-router-dom";

function Page() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Hi there</h2>
      <p className="text-gray-700">Lorem ipsum dolor: {id}</p>
      <p className="text-gray-500 mt-2 text-sm">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit...
      </p>
    </div>
  );
}

export default Page;
