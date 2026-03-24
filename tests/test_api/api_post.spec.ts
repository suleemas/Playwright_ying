import { expect, test } from "@playwright/test";
const host = "https://petstore.swagger.io/v2";

  test("api post user", async ({ request }) => {
  const resp = await request.post(
    `${host}/user`,
    {
    data: {
        "username": "ying",
        "firstName": "ying",
        "lastName": "test",
        "email": "suleeying@gmao.com",
        "password": "123456",
        "phone": "0868884270"
      }
    }
  );
  await expect(resp).toBeOK();
  expect((await resp.json()).message).not.toBeNull();
  console.log(await resp.json());
});
