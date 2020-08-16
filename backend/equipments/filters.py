# import rest_framework_filters as filters
# from .models import Rent


# class RentFilter(filters.FilterSet):
#     renter = filters.CharFilter(field_name='renter_email')
#     is_returned = filters.BooleanFilter(field_name='return_time',method='filter_is_returned')

#     class Meta:
#         model = Rent

#     def filter_is_returned(self, qs, name, value):
#         isnull = not value
#         lookup_expr = filters.LOOKUP_SEP.join([name, 'isnull'])

#         return qs.filter(**{lookup_expr:isnull})
        