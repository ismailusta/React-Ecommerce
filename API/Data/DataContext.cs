using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Product> Products => Set<Product>();
        public DbSet<Cart> Carts => Set<Cart>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Product 1",
                    Description = "Description for Product 1",
                    ImageUrl = "1.jpg",
                    IsActive = true,
                    Price = 10.99m,
                    Stock = 100
                },
                new Product
                {
                    Id = 2,
                    Name = "Product 2",
                    Description = "Description for Product 2",
                    ImageUrl = "2.jpg",
                    IsActive = true,
                    Price = 20.99m,
                    Stock = 50
                },
                new Product
                {
                    Id = 3,
                    Name = "Product 3",
                    Description = "Description for Product 3",
                    ImageUrl = "3.jpg",
                    IsActive = true,
                    Price = 30.99m,
                    Stock = 75
                },
                new Product
                {
                    Id = 4,
                    Name = "Product 4",
                    Description = "Description for Product 4",
                    ImageUrl = "4.jpg",
                    IsActive = true,
                    Price = 40.99m,
                    Stock = 25
                },
                new Product
                {
                    Id = 5,
                    Name = "Product 5",
                    Description = "Description for Product 5",
                    ImageUrl = "5.jpg",
                    IsActive = true,
                    Price = 50.99m,
                    Stock = 10
                },
                new Product
                {
                    Id = 6,
                    Name = "Product 6",
                    Description = "Description for Product 6",
                    ImageUrl = "6.jpg",
                    IsActive = true,
                    Price = 60.99m,
                    Stock = 5
                },
                new Product
                {
                    Id = 7,
                    Name = "Product 7",
                    Description = "Description for Product 7",
                    ImageUrl = "7.jpg",
                    IsActive = true,
                    Price = 70.99m,
                    Stock = 15
                }
            );
        }
    }
}