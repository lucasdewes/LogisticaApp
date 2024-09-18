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
    }
}