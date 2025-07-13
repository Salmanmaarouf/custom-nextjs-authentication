export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  if (!success) return "Unable to create account"
  // to do

  const existingUser = await db.query.UserTable.findFirst( {
    where: eq(UserTable.email, data.email),
  })

  if (existingUser != null) return "Account already exists for this email"

  const hashPassword = hashPassword(data.password, "salt")
  console.log(hashedPassword)

  redirect("/")
}

export async function logOut() {
  // to do
  redirect("/")
}