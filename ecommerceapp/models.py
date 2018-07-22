# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Address(models.Model):
    address_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey('Customers', models.DO_NOTHING, blank=True, null=True)
    street_one = models.CharField(max_length=255, blank=True, null=True)
    street_two = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    state = models.CharField(max_length=255, blank=True, null=True)
    zip = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'address'


class Books(models.Model):
    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    edition = models.IntegerField(blank=True, null=True)
    isbn = models.IntegerField(blank=True, null=True)
    publisher = models.CharField(max_length=255, blank=True, null=True)
    version = models.IntegerField(blank=True, null=True)
    dim_length = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    dim_width = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    dim_height = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    dim_weight = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    sell_value = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    buy_value = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    rent_value_one = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    rent_value_two = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    rent_value_three = models.DecimalField(max_digits=11, decimal_places=2, blank=True, null=True)
    image = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'books'


class Customers(models.Model):
    username = models.CharField(max_length=255)
    customer_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255)
    created_at = models.DateField()

    class Meta:
        managed = False
        db_table = 'customers'


class Deliveries(models.Model):
    delivery_id = models.AutoField(primary_key=True)
    address = models.ForeignKey(Address, models.DO_NOTHING)
    customer = models.ForeignKey(Customers, models.DO_NOTHING)
    status = models.ForeignKey('Status', models.DO_NOTHING)
    order = models.ForeignKey('Orders', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'deliveries'


class Inventory(models.Model):
    inventory_id = models.AutoField(primary_key=True)
    book = models.ForeignKey(Books, models.DO_NOTHING)
    status = models.ForeignKey('Status', models.DO_NOTHING)
    location = models.ForeignKey('Locations', models.DO_NOTHING)
    acq_cost = models.DecimalField(max_digits=11, decimal_places=2)
    due_date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'inventory'


class Locations(models.Model):
    location = models.ForeignKey(Address, models.DO_NOTHING, primary_key=True)
    address_id = models.IntegerField(blank=True, null=True)
    location_desc = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'locations'


class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    customer_id = models.PositiveIntegerField()
    address_id = models.PositiveIntegerField()
    delivery_type = models.CharField(max_length=11)
    order_date = models.DateField()
    order_cmpl_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'orders'


class Requests(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    isbn = models.IntegerField(blank=True, null=True)
    edition = models.CharField(max_length=11, blank=True, null=True)
    date = models.DateField()

    class Meta:
        managed = False
        db_table = 'requests'


class Sales(models.Model):
    order = models.ForeignKey(Orders, models.DO_NOTHING)
    book = models.ForeignKey(Books, models.DO_NOTHING)
    book_title = models.CharField(max_length=11)
    inventory = models.ForeignKey(Inventory, models.DO_NOTHING)
    sale_type = models.PositiveIntegerField()
    gms = models.DecimalField(max_digits=11, decimal_places=2)
    tax = models.DecimalField(max_digits=11, decimal_places=2)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    sale_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'sales'


class Status(models.Model):
    status_id = models.AutoField(primary_key=True)
    status_desc = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'status'


class Type(models.Model):
    type_id = models.AutoField(primary_key=True)
    type_desc = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'type'
