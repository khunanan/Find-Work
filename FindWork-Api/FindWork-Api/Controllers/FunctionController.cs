using FindWork_Api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindWork_Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class FunctionController : ControllerBase
    {
        MongoClient db;
        IMongoCollection<Engineer_Model> CollectionEngineer;
        public FunctionController()
        {
            db = new MongoClient("mongodb+srv://admin:1234@cluster0.hywcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var Data = db.GetDatabase("FWDB");
            CollectionEngineer = Data.GetCollection<Engineer_Model>("Engineer");
        }

        [HttpPost]
        public bool CreateAccount(Engineer_Model require)
        {
            require.id = Guid.NewGuid().ToString();
            CollectionEngineer.InsertOne(require);
            return true;
        }

        [HttpPost("{addSkill}")]
        public bool AddskillToEngineer(SkillEngineerModel require, string id)
        {
            var data = CollectionEngineer.Find(it => it.id == id).FirstOrDefault();
            if (data == null)
            {
                var listDataSkill = data.listSkill;
                listDataSkill.Add(require);

                var addskill = Builders<Engineer_Model>.Update
                    .Set(it => it.listSkill, listDataSkill);
                CollectionEngineer.UpdateOne(it => it.id == id, addskill);
            }
            return true;
        }

        [HttpGet]
        public IEnumerable<Engineer_Model> GetDataEngineer()
        {
            var data = CollectionEngineer.Find(x => true).ToList();
            return data;
        }

        [HttpGet("{catagory}")]
        public IEnumerable<Engineer_Model> GetDataByCatagory(string Catagory)
        {
            var data = CollectionEngineer.Find(x => x.category == Catagory).ToList();
            return data;
        }

        [HttpGet("{id}")]
        public Engineer_Model GetDataEngineerById(string id)
        {
            var data = CollectionEngineer.Find(x => x.id == id).FirstOrDefault();
            return data;
        }

    }
}
