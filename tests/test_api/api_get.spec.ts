import { expect, test } from "@playwright/test";
const host = "https://petstore.swagger.io/v2";

test("api get pet", async ({ request }) => {
  const resp = await request.get(
    `${host}/pet/1`,
  );
  await expect(resp).toBeOK();
  console.log(await resp.json());
});
