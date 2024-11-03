using Microsoft.AspNetCore.Mvc;
using ProjectManagementAPI.Data;
using ProjectManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class ProjectsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProjectsController(AppDbContext context)
    {
        _context = context;
    }

    // POST: /api/projects
    [HttpPost]
    public async Task<ActionResult<Project>> CreateProject(Project project)
    {
        _context.Projects.Add(project);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetProjectById), new { id = project.ProjectId }, project);
    }

    // GET: /api/projects
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetAllProjects()
    {
        return await _context.Projects.Include(p => p.Tasks).ToListAsync();
    }

    // GET: /api/projects/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<Project>> GetProjectById(int id)
    {
        var project = await _context.Projects.Include(p => p.Tasks).FirstOrDefaultAsync(p => p.ProjectId == id);
        if (project == null) return NotFound();
        return project;
    }

    // PUT: /api/projects/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProject(int id, Project project)
    {
        if (id != project.ProjectId) return BadRequest();
        _context.Entry(project).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: /api/projects/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        var project = await _context.Projects.FindAsync(id);
        if (project == null) return NotFound();
        _context.Projects.Remove(project);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
