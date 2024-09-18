using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoremIpsumLogisticaAPI.Models
{
    public class Endereco
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CEP { get; set; }

        [Required]
        public string Logradouro { get; set; }

        [Required]
        public string Numero { get; set; }

        public string? Complemento { get; set; }

        public string? Bairro { get; set; }

        [Required]
        public string Cidade { get; set; }

        [Required]
        public string UF { get; set; }

        [ForeignKey("ClienteId")]
        public int ClienteId { get; set; }
    }
}