namespace API.Entity;

public class Cart
{
    public int CartId { get; set; }
    public string CustomerId { get; set; } = null!;

    public List<CartItem> CartItems { get; set; } = new(); // Navigation property to CartItems

    public void AddItem(Product product, int quantity)
    {
        var item = CartItems.Where(ci => ci.ProductId == product.Id).FirstOrDefault();
        if (item == null)
        {
            CartItems.Add(new CartItem { Product = product, Quantity = quantity });
        }
        else
        {
            item.Quantity += quantity;
        }
    }
    public void DeleteItem(int productId, int quantity)
    {
        var item = CartItems.Where(ci => ci.ProductId == productId).FirstOrDefault();
        if (item == null) return;
        item.Quantity -= quantity;
        if (item.Quantity == 0) CartItems.Remove(item);
    }

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