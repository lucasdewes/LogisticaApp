using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoremIpsumLogisticaAPI.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DataNascimento { get; set; }

        [Required]
        public string Sexo { get; set; }  // Masculino ou Feminino

        // Um cliente pode ter múltiplos endereços
        public ICollection<Endereco>? Enderecos { get; set; }
    }
}