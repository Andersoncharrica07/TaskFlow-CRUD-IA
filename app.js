/**
 * TaskFlow - Gestión de Tareas Inteligente (Versión Refactorizada)
 * Aplicando Buenas Prácticas y Estructuras Limpias (ES6+)
 */

// ==========================================
// CONFIGURACIÓN Y ELEMENTOS DEL DOM
// ==========================================
const DOM = {
    form: document.getElementById('task-form'),
    input: document.getElementById('task-input'),
    priority: document.getElementById('task-priority'),
    list: document.getElementById('tasks-list'),
    emptyState: document.getElementById('empty-state'),
    counter: document.getElementById('task-counter')
};

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// ==========================================
// FUNCIONES DE PERSISTENCIA Y UTILS
// ==========================================
const saveAndRefresh = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
};

const updateCounter = () => {
    const pending = tasks.filter(task => !task.completed).length;
    DOM.counter.textContent = `${pending} pendiente${pending !== 1 ? 's' : ''}`;
};

// ==========================================
// OPERACIONES CRUD (LÓGICA CORE)
// ==========================================

// --- CREATE ---
const addTask = (e) => {
    e.preventDefault();
    const text = DOM.input.value.trim();
    const priority = DOM.priority.value;

    if (!text) return;

    const newTask = {
        id: Date.now(),
        text,
        priority,
        completed: false
    };

    tasks.push(newTask);
    saveAndRefresh();
    DOM.form.reset();
};

// --- READ ---
const renderTasks = () => {
    if (!DOM.list) return;
    DOM.list.innerHTML = '';

    // Manejo del estado vacío de forma ternaria limpia
    DOM.emptyState.style.display = tasks.length === 0 ? 'block' : 'none';

    // Inyección de nodos en el DOM
    tasks.forEach(({ id, text, priority, completed }) => {
        const li = document.createElement('li');
        li.className = `task-item ${priority} ${completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <div class="item-actions">
                <button class="btn-action btn-complete" data-id="${id}" title="Marcar como completada">
                    <i class="fa-solid ${completed ? 'fa-circle-check' : 'fa-check'}"></i>
                </button>
                <button class="btn-action btn-delete" data-id="${id}" title="Eliminar tarea">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        DOM.list.appendChild(li);
    });

    updateCounter();
};

// --- UPDATE & DELETE (Delegación de Eventos Optimizada) ---
DOM.list.addEventListener('click', (e) => {
    const completeBtn = e.target.closest('.btn-complete');
    const deleteBtn = e.target.closest('.btn-delete');

    if (completeBtn) {
        const id = parseInt(completeBtn.getAttribute('data-id'));
        tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        saveAndRefresh();
    }

    if (deleteBtn) {
        const id = parseInt(deleteBtn.getAttribute('data-id'));
        tasks = tasks.filter(task => task.id !== id);
        saveAndRefresh();
    }
});

// ==========================================
// INICIALIZACIÓN
// ==========================================
DOM.form.addEventListener('submit', addTask);
renderTasks();