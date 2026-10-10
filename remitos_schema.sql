-- Tablas nuevas para la app de Remitos (no toca ninguna tabla de PAPO).
-- Correr esto una sola vez en el SQL Editor de Supabase.

create table if not exists remitos (
  id uuid primary key default gen_random_uuid(),
  numero text,
  fecha text,
  hora text,
  cliente text,
  direccion text,
  cuit text,
  creado_en timestamptz not null default now()
);

create table if not exists remito_items (
  id uuid primary key default gen_random_uuid(),
  remito_id uuid not null references remitos(id) on delete cascade,
  orden int,
  codigo text,
  descripcion text,
  cantidad_original numeric,
  unidades_reales numeric,
  tipo text,
  cantidad_mostrada numeric,
  unidad_mostrada text,
  texto text,
  recibido boolean not null default false
);

create index if not exists remito_items_remito_id_idx on remito_items(remito_id);

alter table remitos disable row level security;
alter table remito_items disable row level security;
