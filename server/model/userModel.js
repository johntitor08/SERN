// This is now a utility class for user operations
class UserModel {
  constructor(supabase) {
    this.supabase = supabase;
  }

  // Create a new user
  async createUser(userData) {
    const { data, error } = await this.supabase
      .from("users")
      .insert([userData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Find user by email
  async findByEmail(email) {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") throw error; // PGRST116 is "not found"
    return data;
  }

  // Find user by ID
  async findById(id) {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  }

  // Get all users
  async findAll() {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  }

  // Update user
  async updateUser(id, updateData) {
    const { data, error } = await this.supabase
      .from("users")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
}

export default UserModel;
