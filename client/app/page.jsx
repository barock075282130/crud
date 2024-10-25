import Form from "@Components/Form";

const getUserData = async () => {
  try {
    const res = await fetch('http://localhost:8080/', {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export default async function Home() {
  const userData = await getUserData()
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="grid gap-3">
        <Form data={userData} />
      </main>
    </div>
  );
}
