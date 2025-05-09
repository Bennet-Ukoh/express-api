import { v4 as uuidv4 } from "uuid";

let items = [];

export const getAll = (req, res) => res.json(items);

export const getById = (req, res, next) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    const err = new Error(`Item with id ${req.params.id} not found`);
    err.status = 404;
    return next(err);
  }
  res.json(item);
};

export const create = (req, res, next) => {
  const { name, description, tags, status, price, category } = req.body;
  if (!name || !description) {
    const err = new Error("Both name and description are required");
    err.status = 400;
    return next(err);
  }
  const newItem = {
    id: uuidv4(),
    name,
    description,
    tags: Array.isArray(tags) ? tags : [],
    status: status || "active",
    price: price || 0,
    category: category || "general",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const update = (req, res, next) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    const err = new Error(`Item with id ${req.params.id} not found`);
    err.status = 404;
    return next(err);
  }
  const { name, description, tags, status, price, category } = req.body;
  if (!name && !description && !tags && !status && !price && !category) {
    const err = new Error("At least one field must be provided to update");
    err.status = 400;
    return next(err);
  }
  if (name) item.name = name;
  if (description) item.description = description;
  if (Array.isArray(tags)) item.tags = tags;
  if (status) item.status = status;
  if (price !== undefined) item.price = price;
  if (category) item.category = category;
  item.updatedAt = new Date().toISOString();
  res.json(item);
};

export const remove = (req, res, next) => {
  const index = items.findIndex((i) => i.id === req.params.id);
  if (index === -1) {
    const err = new Error(`Item with id ${req.params.id} not found`);
    err.status = 404;
    return next(err);
  }
  items.splice(index, 1);
  res.status(204).end();
};
