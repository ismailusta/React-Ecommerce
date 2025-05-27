namespace API.Entity;

public class Cart
{
    public int CartId { get; set; }
    public string CustomerId { get; set; } = null!;

    public List<CartItem> CartItems { get; set; } = new(); // Navigation property to CartItems

}
public class CartItem
{
    public int CartItemId { get; set; }
    public int CartId { get; set; }
    public Cart Cart { get; set; } = null!; // Navigation property to Cart
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!; // Navigation property to Product
    public int Quantity { get; set; }

}