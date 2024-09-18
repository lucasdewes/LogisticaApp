using Microsoft.EntityFrameworkCore;
using LoremIpsumLogisticaAPI.Models;

namespace LoremIpsumLogisticaAPI.Data
{
    public class DataContextApp : DbContext
    {
        public DataContextApp(DbContextOptions<DataContextApp> options) : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configura o relacionamento um-para-muitos
            modelBuilder.Entity<Cliente>()
                .HasMany(c => c.Enderecos)
                .WithOne(e => e.Cliente)
                .HasForeignKey(e => e.ClienteId);
        }
    }
}