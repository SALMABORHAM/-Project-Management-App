using Microsoft.AspNetCore.Mvc;
using ProjectManagementAPI.Data;
using ProjectManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

[Route("api/projects/{projectId}/tasks")]
[ApiController]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    // POST: /api/projects/{projectId}/tasks
    [HttpPost]
    public async Task<ActionResult<Task>> CreateTask(int projectId, Task task)
    {
        task.ProjectId = projectId;
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTaskById), new { taskId = task.TaskId, projectId }, task);
    }

    // GET: /api/projects/{projectId}/tasks
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Task>>> GetTasksForProject(int projectId)
    {
        return await _context.Tasks.Where(t => t.ProjectId == projectId).ToListAsync();
    }

    // PUT: /tasks/{taskId}
    [HttpPut("/tasks/{taskId}")]
    public async Task<IActionResult> UpdateTask(int taskId, Task task)
    {
        if (taskId != task.TaskId) return BadRequest();
        _context.Entry(task).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: /tasks/{taskId}
    [HttpDelete("/tasks/{taskId}")]
    public async Task<IActionResult> DeleteTask(int taskId)
    {
        var task = await _context.Tasks.FindAsync(taskId);
        if (task == null) return NotFound();
        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}