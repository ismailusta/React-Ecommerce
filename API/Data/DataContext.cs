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
                }
            );
        }
    }
}