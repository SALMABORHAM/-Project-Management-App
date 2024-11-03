using Microsoft.EntityFrameworkCore;
using ProjectManagementAPI.Models;

namespace ProjectManagementAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}
