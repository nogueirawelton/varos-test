export async function POST(request: Request) {
  const body = await request.json();

  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const rn = Math.round(Math.random() * 10);

      if (rn % 2) {
        resolve({
          success: true,
          body,
        });
        return;
      }

      reject({
        success: false,
        body,
      });
    }, 2000);
  });

  return Response.json(response);
}
