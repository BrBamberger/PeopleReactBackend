using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactPeople.Data;
using Microsoft.Extensions.Configuration;

namespace ReactPeople.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleRepo(_connectionString);
            return repo.GetPeople();
        }

       [Route("addperson")]
       [HttpPost]
       public void AddPerson(Person person)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.AddPerson(person);
        }

        [Route("updateperson")]
        [HttpPost]
        public void UpdatePerson (Person person)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.Update(person);
        }

        [Route("deleteperson")]
        [HttpPost]
        public void DeletePerson (Person person)
        {
            var repo = new PeopleRepo(_connectionString);
            repo.Delete(person.Id);
        }
        
    }
}
