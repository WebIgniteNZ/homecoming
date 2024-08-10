export async function POST(req, res) {
  const body = await req.json();
  const { pass } = body || {};
  console.log(pass);
  if (pass === process.env.NEXT_APP_PASS) {
    return new Response(true, {
      status: 200,
    });
  }
  return new Response(false, {
    status: 401,
  });
}
