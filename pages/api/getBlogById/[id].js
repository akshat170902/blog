export default function handler(req, res) {
  const { id } = req.query;
  const mockData = {
    id,
    title: `Blog Title ${id}`,
    desc: `Short description for blog ${id}`,
    content: `Full content for blog ${id}`,
    createdAt: new Date().toISOString(),
    author: `Author ${id}`,
    image: `https://placehold.co/600x400?text=Blog+${id}`,
  };

  if (req.method === "GET") {
    res.status(200).json(mockData);
  } else if (req.method === "PUT") {
    res.status(200).json({ message: "Blog updated", ...req.body });
  } else if (req.method === "DELETE") {
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}
