using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindWork_Api.Model
{
    public class Engineer_Model
    {
        [BsonId]
        public string id { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string image { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public string nickName { get; set; }
        public string gender { get; set; }
        public DateTime brithDate { get; set; }
        public int age { get; set; }
        public string category { get; set; }
        public string address { get; set; }
        public string contact { get; set; }
        public string collectPoint { get; set; }
        public string description { get; set; }
        public List<SkillEngineerModel> listSkill { get; set; }
    }
}
