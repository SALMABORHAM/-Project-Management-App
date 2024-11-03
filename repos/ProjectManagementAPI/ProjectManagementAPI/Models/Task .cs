using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace ProjectManagementAPI.Models
{
    public class Task
    {
        [Key]
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string AssignedTo { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }

        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        public Project Project { get; set; }


    }
}
