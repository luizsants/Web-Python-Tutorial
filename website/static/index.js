function deleteNote(noteId) {
    fecth('/delete-note', {
        method: 'PSOT',
        body: JSON.stringify({ noteId: noteId})
    }).then((_res) => {
        window.location.href= "/";
    })
}