﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace ProjectManagementAPI.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Budget { get; set; }
        public string Owner { get; set; }
        public string Status { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }
}
