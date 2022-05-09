const express = require('express');

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({ message: 'Alive' });
});

app.get('/explorers', async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
  const { id } = req.params;

  const explorer = await prisma.explorer.findUnique({ where: { id: parseInt(id, 10) } });

  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission,
  };

  const message = 'Explorer creado.';
  await prisma.explorer.create({ data: explorer });
  res.json({ message });
});

app.put('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  await prisma.explorer.update({
    where: { id },
    data: {
      mission: req.body.mission,
    },
  });

  res.json({ message: 'Acualizado correctamente' });
});

app.delete('/explorers/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  await prisma.explorer.delete({ where: { id } });

  res.json({ message: 'Eliminado correctamente' });
});

app.get('/courses', async (req, res) => {
  const allCourses = await prisma.course.findMany();

  res.json(allCourses);
});

app.get('/courses/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const course = await prisma.course.findUnique({ where: { id } });

  res.json(course);
});

app.post('/courses', async (req, res) => {
  const course = {
    name: req.body.name,
    lang: req.body.lang,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification,
  };

  const message = 'Course created';

  await prisma.course.create({ data: course });

  res.json({ message });
});

app.put('/courses/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  await prisma.course.update({
    where: { id },
    data: {
      hasCertification: req.body.mission,
    },
  });

  res.json({ message: 'Acualizado correctamente' });
});

app.delete('/courses/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  await prisma.course.delete({ where: { id } });
  res.json({ message: 'Eliminado correctamente' });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
